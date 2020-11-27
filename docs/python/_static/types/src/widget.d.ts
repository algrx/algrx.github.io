import { DOMWidgetModel, DOMWidgetView, ISerializers } from '@jupyter-widgets/base';
export declare class AlgorithmXModel extends DOMWidgetModel {
    defaults(): any;
    static serializers: ISerializers;
    static model_name: string;
    static model_module: string;
    static model_module_version: string;
    static view_name: string;
    static view_module: string;
    static view_module_version: string;
}
export declare class AlgorithmXView extends DOMWidgetView {
    private canvas;
    private eventIndex;
    private stopped;
    playEvents(events: ReadonlyArray<string>): void;
    playAllEvents(): void;
    eventsChanged(): void;
    resetCanvas(): void;
    removeCanvas(): void;
    remove(): void;
    clickRestart(): void;
    clickStart(): void;
    clickStop(): void;
    renderButtons(): void;
    render(): void;
}
