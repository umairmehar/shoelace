import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */
export declare class Icon {
    svg: string;
    /** The name of the icon to draw. */
    name: string;
    /** An external URL of an SVG file. */
    src: string;
    /** An alternative description to use for accessibility. If omitted, the name or src will be used to generate it. */
    label: string;
    /** Emitted when the icon has loaded. */
    slLoad: EventEmitter;
    /** Emitted when the icon failed to load. */
    slError: EventEmitter;
    handleChange(): void;
    componentDidLoad(): void;
    getLabel(): string;
    setIcon(): void;
    render(): any;
}
