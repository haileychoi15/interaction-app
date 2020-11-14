import { WaveGroup } from "./wavegroup.js";

export class App {
    constructor() {
        this.section = document.querySelector('.section');
        this.canvas = this.section.querySelector('.canvas');
        this.ctx = this.canvas.getContext('2d');

        this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = this.section.clientWidth;
        this.stageHeight = this.section.clientHeight;
        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.waveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}