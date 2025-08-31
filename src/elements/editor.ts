import { css, CSSResultGroup, html, HTMLTemplateResult, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { open } from '@tauri-apps/plugin-dialog';
import { convertFileSrc } from "@tauri-apps/api/core";
import "./tile_grid";

@customElement("pipe-editor")
export class PipeEditorElement extends LitElement {
	@state()
	src: string;

	constructor() {
		super();
		this.src = "";
	}
	async onButtonPress() {
		
		const file = await open({
  			multiple: false,
  			directory: false,
		});
		

		this.src = convertFileSrc(file!)
	}

	protected render(): HTMLTemplateResult {
		return html`
			<pipe-tile-grid></pipe-tile-grid>
			<div></div>
		`;
	}

	static styles: CSSResultGroup = css`
		:host {
			height: 100%;

			display: grid;
			grid-template-columns: auto 20rem;
		}
	`;
	
}