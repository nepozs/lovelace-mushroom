import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { property, customElement } from "lit/decorators.js";
import { animations } from "../utils/entity-styles";

@customElement("mushroom-chip")
export class BadgeIcon extends LitElement {
    @property() public icon: string = "";

    @property() public label: string = "";

    protected render(): TemplateResult {
        return html`
            <ha-card class="chip">
                <slot></slot>
            </ha-card>
        `;
    }

    static get styles(): CSSResultGroup {
        return css`
            :host {
                --icon-color: var(--primary-text-color);
                --text-color: var(--primary-text-color);
            }
            .chip {
                box-sizing: border-box;
                height: var(--chip-height);
                font-size: calc(var(--chip-height) * 0.3);
                width: auto;
                padding: var(--chip-padding);
                border-radius: var(--chip-border-radius);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                line-height: 0;
            }
            ::slotted(ha-icon) {
                display: flex;
                --mdc-icon-size: 1.5em;
                color: var(--icon-color);
            }
            ::slotted(svg) {
                width: 1.5em;
                height: 1.5em;
                display: flex;
            }
            ::slotted(span) {
                font-weight: bold;
                font-size: 1em;
                line-height: 1;
                color: var(--text-color);
            }
            ::slotted(*:not(:last-child)) {
                margin-right: 0.5em;
            }
        `;
    }
}
