import type { TimelineAnimationOptions, TimelineEvents } from 'vis-timeline/types';
export declare type TimelineEventsWithMissing = TimelineEvents | 'dragover' | 'markerchange' | 'markerchanged';
export declare type TimelineEventHandler = 'currentTimeTickHandler' | 'clickHandler' | 'contextmenuHandler' | 'doubleClickHandler' | 'dragoverHandler' | 'dropHandler' | 'mouseOverHandler' | 'mouseDownHandler' | 'mouseUpHandler' | 'mouseMoveHandler' | 'groupDraggedHandler' | 'changedHandler' | 'rangechangeHandler' | 'rangechangedHandler' | 'selectHandler' | 'itemoverHandler' | 'itemoutHandler' | 'timechangeHandler' | 'timechangedHandler' | 'markerchangeHandler' | 'markerchangedHandler';
export declare type TimelineEventsHandlers = Partial<Record<TimelineEventHandler, Function>>;
export declare type CustomTime = {
    datetime: Date;
    id: string;
};
export declare type SelectionOptions = {
    focus?: boolean;
    animation?: TimelineAnimationOptions;
};
