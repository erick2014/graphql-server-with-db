//import required models
const ClientModel = require("../../models/clientModel");

const clientsResolvers = {

  clients: (args, req) => {
    // receive the client model from request
    const { clientModel } = req;
    // fetch the records in the db
    return clientModel.findAll()
      .then(clients => {
        //parse the data
        let newClientsList = clients.map(client => (client));
        return newClientsList;
      })
  },

  setClient: (args, req) => {
    const { clientModel } = req;
    const fieldsToSave = args.clientInfo;

    return clientModel.create(fieldsToSave, { fields: Object.keys(fieldsToSave) })
      .then(clientSaved => {
        return clientSaved.get({ plain: true });
      })
      .catch(err => {
        return { error: "hubo un error al grabar el cliente" }
      })

  },

  editClient: (args, req) => {
    const { clientModel } = req;
    const fieldsToEdit = args.clientInfo;

    return clientModel.update(fieldsToEdit, { fields: Object.keys(fieldsToEdit), where: { 'id': fieldsToEdit["id"] } })
      .then(clientUpdated => {
        if (clientUpdated[0] > 0) return fieldsToEdit
        else return {}
      })
      .catch(err => {
        return { error: "something were wrong updating the product" }
      })
  },

  deleteClient: (args, req) => {
    const clientId = args.id;
    const { clientModel } = req;
    return clientModel.destroy({ where: { "id": clientId } })
      .then(resp => {
        if (resp === 1) {
          return { id: clientId }
        }
        else {
          return {}
        }
      })
      .catch(err => {
        return { error: true }
      });
  }
}

module.exports = clientsResolvers;
