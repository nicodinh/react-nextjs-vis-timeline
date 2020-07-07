import { Component } from 'react';
import { DataSet } from 'vis-data/esnext';
import type { DateType, IdType, Timeline as VisTimeline, TimelineGroup, TimelineItem, TimelineOptions } from 'vis-timeline/types';
import type { CustomTime, SelectionOptions, TimelineEventsHandlers } from './models';
declare type Props = {
    initialItems?: TimelineItem[];
    initialGroups?: TimelineGroup[];
    options?: TimelineOptions;
    selection?: IdType[];
    customTimes?: CustomTime[];
    selectionOptions?: SelectionOptions;
    animate?: boolean | {};
    currentTime?: DateType;
} & TimelineEventsHandlers;
export declare class Timeline extends Component<Props, {}> {
    #private;
    static defaultProps: any;
    timeline: Readonly<VisTimeline>;
    readonly items: DataSet<TimelineItem>;
    readonly groups: DataSet<TimelineGroup>;
    constructor(props: Props);
    componentWillUnmount(): void;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: Props): boolean;
    updateCustomTimes(prevCustomTimes: CustomTime[], customTimes: CustomTime[]): void;
    updateSelection(selection: IdType | IdType[], selectionOptions: SelectionOptions): void;
    init(): void;
    render(): JSX.Element;
}
export {};
