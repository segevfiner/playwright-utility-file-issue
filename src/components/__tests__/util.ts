import type { ComponentFixtures } from "@playwright/experimental-ct-vue";
import HelloWorld from "../HelloWorld.vue";

export async function mountHello(mount: ComponentFixtures['mount']) {
    return mount(HelloWorld);
}
