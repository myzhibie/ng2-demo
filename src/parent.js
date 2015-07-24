import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap,NgFor,NgIf} from 'angular2/angular2';

@Component({
    selector:'parent'
})

@View({
    template:'<h1 class="hparent">{{message}}</h1><child></child>',
    directives:[ChildComponent]
})
class ParentComponent {
    message:string;
    constructor(){
        this.message='parent component';
    }
}

@Component ({
    selector:'child'
})

@View({
    template:'<p class="pchild">{{ message }}</p>'
})

class ChildComponent{
    message:string;
    constructor(){
        this.message='child component';
    }
}
bootstrap(ParentComponent);