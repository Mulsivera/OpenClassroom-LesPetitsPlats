export default class RecipeRender {

    render(container, recipe, TemplateClass) {

        const template = new TemplateClass(recipe).create();
        container.append(template);

    }

}