
exports.up = function(knex) {

    return knex.schema.createTable('lanches', function (table){
      table.increments();
      table.string('nome_lanche').notNullable();
      table.string('descricao_lanche').notNullable();
      table.decimal('valor_lanche').notNullable();
      table.boolean('vegano').notNullable();
      table.boolean('isAvaliable').defaultTo(true);
      table.string('imgLanche').defaultTo('./teste');

      //table.foreign('ong_id').references('id').inTable('ongs');
  });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('lanches');
  };
  