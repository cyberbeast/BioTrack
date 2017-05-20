const ID = `
  type Id {
    _id: String

    # ID fields
    id_VdhVsapImportationAppNumber: String
    id_SupplierSubject: String
  }
`
console.log("Exporting TYPE: ID");
export default () => [ID]
