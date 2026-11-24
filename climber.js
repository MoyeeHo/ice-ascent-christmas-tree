// A stylized stick figure driven by the route's hand and foot anchors.
window.createClimber = function(THREE, parent, surfacePoint) {
    const group = new THREE.Group();
    group.visible = false;
    parent.add(group);
    const material = new THREE.MeshStandardMaterial({ color:0xeafaff, roughness:.55, emissive:0x9adfff, emissiveIntensity:.28 });
    const boneGeometry = new THREE.CylinderGeometry(.22,.22,1,8);
    const jointGeometry = new THREE.SphereGeometry(.3,8,6);
    const bones = Array.from({length:9},()=>{
        const mesh = new THREE.Mesh(boneGeometry,material); group.add(mesh); return mesh;
    });
    const joints = Array.from({length:8},()=>{
        const mesh = new THREE.Mesh(jointGeometry,material); group.add(mesh); return mesh;
    });
    const head = new THREE.Mesh(new THREE.SphereGeometry(.95,16,12),material);
    group.add(head);
    const up = new THREE.Vector3(0,1,0);
    let route, frames=[], started=0, climbEnd=0, launchPose;
    const smooth = t => {t=THREE.MathUtils.clamp(t,0,1); return t*t*(3-2*t);};
    const clonePose = pose => Object.fromEntries(Object.entries(pose).map(([key,p])=>[key,p.clone()]));
    const contact = id => {
        const hold=route.holds.find(h=>h.id===id);
        return new THREE.Vector3(...hold.position).addScaledVector(new THREE.Vector3(...hold.normal),.65);
    };
    function frame(from,to,duration,type='static') {
        frames.push({from:clonePose(from),to:clonePose(to),start:climbEnd,duration,type});
        climbEnd+=duration;
    }
    function start(selected,now=performance.now()) {
        route=selected; started=now; frames=[]; climbEnd=0;
        let pose={left:contact(route.startHolds[0]),right:contact(route.startHolds[1]),
            footL:contact(route.startFeet[0]),footR:contact(route.startFeet[1])};
        frame(pose,pose,.6);
        for(const move of route.moves) {
            const next=clonePose(pose);
            next.footL=contact(move.feet[0]); next.footR=contact(move.feet[1]);
            if(move.hand==='both') {
                const target=contact(move.to), side=new THREE.Vector3(Math.cos(route.lane),0,-Math.sin(route.lane));
                next.left=target.clone().addScaledVector(side,-.25);
                next.right=target.clone().addScaledVector(side,.25);
            } else next[move.hand]=contact(move.to);
            frame(pose,next,move.duration,move.type);
            pose=next;
        }
        const matched=clonePose(pose), top=contact(route.finishHold);
        const side=new THREE.Vector3(Math.cos(route.lane),0,-Math.sin(route.lane));
        matched.left=top.clone().addScaledVector(side,-.25);
        matched.right=top.clone().addScaledVector(side,.25);
        frame(pose,matched,.5,'finish');
        frame(matched,matched,.35,'top');
        launchPose=matched;
        group.visible=true;
        group.userData={routeId:route.id,phase:'climbing',duration:climbEnd+2.7};
        update(now);
    }
    function bodyFor(pose,lift=0) {
        const hands=pose.left.clone().add(pose.right).multiplyScalar(.5);
        const feet=pose.footL.clone().add(pose.footR).multiplyScalar(.5);
        const angle=Math.atan2(hands.x+feet.x,hands.z+feet.z);
        const hip=surfacePoint(Math.max(-31,hands.y*.38+feet.y*.62),angle,3);
        hip.y+=lift*.5;
        hip.addScaledVector(new THREE.Vector3(Math.sin(angle),0,Math.cos(angle)),lift);
        return {hip,angle};
    }
    function draw(pose,hip,angle,crouch=0) {
        const outward=new THREE.Vector3(Math.sin(angle),0,Math.cos(angle));
        const side=new THREE.Vector3(Math.cos(angle),0,-Math.sin(angle));
        const neck=hip.clone().addScaledVector(up,4.3-crouch*.6);
        head.position.copy(neck).addScaledVector(up,1.25);
        let index=0;
        function bone(a,b) {
            const mesh=bones[index++], delta=b.clone().sub(a);
            mesh.position.copy(a).add(b).multiplyScalar(.5);
            mesh.scale.set(1,delta.length(),1);
            mesh.quaternion.setFromUnitVectors(up,delta.normalize());
        }
        bone(hip,neck.clone().addScaledVector(up,.4));
        ['left','right','footL','footR'].forEach((key,i)=>{
            const arm=i<2, sign=i%2===0?-1:1;
            const root=(arm?neck:hip).clone().addScaledVector(side,sign*.18);
            const end=pose[key];
            const bend=root.clone().lerp(end,.5).addScaledVector(outward,arm?1.1:1.7);
            bend.addScaledVector(side,sign*(arm?1.1:.5));
            bone(root,bend); bone(bend,end);
            joints[i*2].position.copy(bend); joints[i*2+1].position.copy(end);
        });
    }
    function update(now=performance.now()) {
        if(!route) return;
        const elapsed=Math.max(0,(now-started)/1000);
        if(elapsed<climbEnd) {
            const f=frames.find(f=>elapsed<f.start+f.duration);
            const t=(elapsed-f.start)/f.duration, dynamic=f.type==='dyno'||f.type==='deadpoint';
            const pose={};
            for(const key of ['left','right','footL','footR']) {
                const foot=key.startsWith('foot');
                const progress=smooth(dynamic?(t-.15)/.7:foot?t/.45:(t-.25)/.7);
                pose[key]=f.from[key].clone().lerp(f.to[key],progress);
                if(f.from[key].distanceToSquared(f.to[key])>.01) {
                    const arc=Math.sin(progress*Math.PI)*(dynamic?2.2:.65);
                    const angle=Math.atan2(pose[key].x,pose[key].z);
                    pose[key].add(new THREE.Vector3(Math.sin(angle)*arc,foot?arc:0,Math.cos(angle)*arc));
                }
            }
            const body=bodyFor(pose,dynamic?Math.sin(t*Math.PI)*2:0);
            draw(pose,body.hip,body.angle);
            group.userData.phase=f.type==='top'?'top':'climbing';
            return;
        }
        // Jump clear of the widening cone, then land outside its base.
        const t=THREE.MathUtils.clamp((elapsed-climbEnd)/2,0,1);
        const launch=bodyFor(launchPose), angle=launch.angle;
        const normal=new THREE.Vector3(Math.sin(angle),0,Math.cos(angle));
        const side=new THREE.Vector3(Math.cos(angle),0,-Math.sin(angle));
        const hip=launch.hip.clone().lerp(normal.clone().multiplyScalar(42),t);
        hip.y=THREE.MathUtils.lerp(launch.hip.y,-31,t*t)+6*Math.sin(Math.PI*t);
        const landing=THREE.MathUtils.clamp((elapsed-climbEnd-2)/.7,0,1);
        const crouch=1.5*Math.sin(landing*Math.PI);
        hip.y-=crouch;
        const pose={};
        for(const [i,key] of ['left','right','footL','footR'].entries()) {
            const foot=i>1, sign=i%2===0?-1:1;
            const target=hip.clone().addScaledVector(side,sign*(foot?1.3:3.2-1.8*t));
            target.y+=foot?-6.5+crouch:4-3*t;
            const relative=launchPose[key].clone().sub(launch.hip).add(hip);
            pose[key]=relative.lerp(target,smooth(t*4));
        }
        draw(pose,hip,angle,crouch);
        group.userData.phase=t<1?'jumping':landing<1?'landing':'idle';
    }
    return {group,start,update};
};
