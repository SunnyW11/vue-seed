export default function registerBaseComponent(Vue) {
  const requireComponent = require.context(
    '@/components/base-components',
    false,
    /.(vue|js)/
  );
  requireComponent.keys().forEach(filename => {
    const componentConfig = requireComponent(filename);
    const componentName = filename.replace(/^\.\/(.*)\.\w+$/, '$1');
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}
