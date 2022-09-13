const AbstractManager = require("./AbstractManager");

class ShoplistManager extends AbstractManager {
  constructor() {
    super({ table: "shoplist" });
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (order_number, total_price, status, date, ticket_id) values (?, ?, ?, ?, ?)`,
      [
        item.order_number,
        item.total_price,
        item.status,
        item.date,
        item.ticket_id,
      ]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set order_number = ?, total_price = ?, status = ?, date = ?, ticket_id = ? where id = ?`,
      [item.order_number, item.status, item.date, item.ticket_id, item.id]
    );
  }
}

module.exports = ShoplistManager;
