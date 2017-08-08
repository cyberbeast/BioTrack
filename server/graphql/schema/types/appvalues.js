const AppValues = `
    type AppValues {
        locations: [String]
        status: [String]
    }
`;

console.log('Exporting TYPE: AppValues');
export default () => [AppValues];
