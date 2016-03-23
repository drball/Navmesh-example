#pragma strict

public var Target : Transform;

private var navComponent : NavMeshAgent;

function Start () {
	navComponent = this.transform.GetComponent.<NavMeshAgent>();
}

function Update () {
	if (Target) {
navComponent.SetDestination(Target.position);
	}
}