import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

export const Animations = [
    trigger('firstStateFlyIn', [
        state('active', style({ opacity: 1, transform: 'translateX(0)' })),
        state('inactive', style({ opacity: 0, transform: 'translateX(0)' })),
        transition('inactive => active', [
            style({
                opacity: 0,
                transform: 'translateX(100%)'
            }),
            animate('0.5s ease-in')
        ]),
        transition('active => inactive', [
            animate('0.5s ease-out', style({
                opacity: 0
            }))
        ])
    ]),
    trigger('secondStateFlyIn', [
        state('active', style({ opacity: 1, transform: 'translateY(0)' })),
        state('inactive', style({ opacity: 0, transform: 'translateY(0)' })),
        transition('inactive => active', [
            style({
                opacity: 0,
                transform: 'translateY(100%)'
            }),
            animate('0.6s ease-in')
        ]),
        transition('active => inactive', [
            animate('0.3s ease-out', style({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]),
    trigger('firstSubStateFlyIn', [
        state('active', style({ opacity: 1, transform: 'translateX(0)' })),
        state('inactive', style({ opacity: 0, transform: 'translateX(0)' })),
        transition('* => active', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.5s ease-in')
        ]),
        transition('active => inactive', [
            animate('0.5s ease-out', style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }))
        ])
    ]),
    trigger('secondSubStateFlyIn', [
        state('active', style({ opacity: 1, transform: 'translateX(0)' })),
        state('inactive', style({ opacity: 0, transform: 'translateX(0)' })),
        transition('* => active', [
            style({
                opacity: 0,
                transform: 'translateX(100%)'
            }),
            animate('0.5s ease-in')
        ]),
        transition('active => inactive', [
            animate('0.5s ease-out', style({
                opacity: 0,
                transform: 'translateX(100%)'
            }))
        ])
    ]),
    trigger('textFadeIn', [
        state('active', style({ opacity: 1, transform: 'translateX(0)' })),
        state('inactive', style({ opacity: 0, transform: 'translateX(0)' })),
        transition('* => active', [
            style({
                opacity: 0
            }),
            animate('2s ease-in')
        ]),
        transition('active => inactive', [
            animate('0.5s ease-out', style({
                opacity: 0
            }))
        ])
    ]),
    trigger('secondTextFadeIn', [
        state('active', style({ opacity: 1, transform: 'translateX(0)' })),
        state('inactive', style({ opacity: 0, transform: 'translateX(0)' })),
        transition('* => active', [
            style({
                opacity: 0
            }),
            animate('4s ease-in')
        ]),
        transition('active => inactive', [
            animate('0.5s ease-out', style({
                opacity: 0
            }))
        ])
    ])
];