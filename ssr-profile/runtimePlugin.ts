console.log('runtime plugins active');
export default function () {
  return {
    name: 'eager-react-test-plugin',
    async init(args: any) {
      return args;
    },
    async beforeRequest(args: any) {
      // const React = await import('react');
      // console.log(React);
      return args;
    },
    resolveShare(args: any) {
      console.log(args);
      return args;
    },
  };
}
