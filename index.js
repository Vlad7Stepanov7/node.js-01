const contacts = require("./contacts");

const { program } = require("commander");

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse();

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
      case "list":
          const listContacts = await contacts.listContacts();
          return console.log(listContacts);

      case "get":
          const contact = await contacts.getContactById(id);
          return console.log(contact);

      case "add":
          const newContact = await contacts.addContact(name, email, phone);
          return console.log(newContact);

      case "remove":
          const removedContact = await contacts.removeContact(id);
          return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);