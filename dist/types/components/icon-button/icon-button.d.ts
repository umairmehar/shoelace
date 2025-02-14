/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */
export declare class IconButton {
    button: HTMLButtonElement;
    /** The name of the icon to draw. See the icon component for a full list of icons. */
    name: string;
    /** An external URL of an SVG file. */
    src: string;
    /** An alternative description to use for accessibility. If omitted, the name or src will be used to generate it. */
    label: string;
    /** Set to true to disable the button. */
    disabled: boolean;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
