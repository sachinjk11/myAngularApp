import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector : '[dropdownDirective]'
})
export class dropdownDirective
{
    @HostBinding('class.open') isopen = false;

    @HostListener('click') toggle()
    {
        this.isopen = !this.isopen;
    }
}