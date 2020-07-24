
exports.up = function(knex) {
    return knex.schema.createTable('royal_info', function (table){
        table.string('nome').notNullable();
        table.decimal('pedido_minimo').notNullable();
        table.integer('tempo_medio_pedido').notNullable();
        table.string('telefone_loja').notNullable();
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('royal_info');
  };
  