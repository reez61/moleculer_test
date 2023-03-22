export default () => ({
  name: 'pizza',
  actions: {
    'deliver-pizza': (context) => {
      return {
        params: context.params,
        body: context.body,
      };
    },
  },
});
