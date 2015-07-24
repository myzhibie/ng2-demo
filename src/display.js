import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap,NgFor,NgIf} from 'angular2/angular2';

class FriendService {
    names:Array<string>;
    constructor(){
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
}
@Component({
    selector: 'display',
    hostInjector:[ FriendService ]
})
@View({
    templateUrl: 'showData.html',
    directives:[NgFor,NgIf]
})
 class DisplayComponent {
    myName: string;
    names:Array<string>;
    constructor(friendService:FriendService) {
        this.myName='myzhibie';
        this.names=friendService.names;
    }
    updateItems(name:string){
       this.names.push(name);
    }
    doneTyping($event){
        if($event.which===13){
            this.updateItems($event.target.value);
            $event.target.value=null;
        }
    }
}

bootstrap(DisplayComponent);

