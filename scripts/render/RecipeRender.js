export default class RecipeRender {

    render(container,recipe,TemplateClass) {
        
        const templateInstance = new TemplateClass(recipe);
        const template = templateInstance.create();
        container.append(template);

    }

}