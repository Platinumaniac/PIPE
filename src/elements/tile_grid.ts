import { css, CSSResultGroup, html, HTMLTemplateResult, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";

@customElement("pipe-tile-grid")
export class TileGridElement extends LitElement {

	private canvasRef: Ref<HTMLCanvasElement>;

	public constructor() {
		super();
		this.canvasRef = createRef();
	}

	protected render(): HTMLTemplateResult {
		return html`
			<canvas ${ref(this.canvasRef)}></canvas>
		`;
	}

	static styles: CSSResultGroup = css`
		canvas {
			height: 100%;
		}
	`;
}