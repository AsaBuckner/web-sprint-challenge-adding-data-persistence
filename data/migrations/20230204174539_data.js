/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    // one to many
    return knex.schema.createTable('projects', tbl =>{
      tbl.increments('project_id')
      tbl.string(`project_name`).notNullable()
      tbl.text(`project_description`)
      tbl.boolean(`project_completed`)
    })
    .createTable("resources", tbl => {
      tbl.increments(`resource_id`)
      tbl.string(`resource_name`, 128).notNullable().unique()
      tbl.text(`resource_description`)
    })
    .createTable("tasks", tbl => {
      tbl.increments(`task_id`)
      tbl.text(`task_description`).notNullable()
      tbl.text(`task_notes`)
      tbl.boolean(`task_completed`)
      tbl.integer(`project_id`).unsigned().references('project_id').inTable("projects")
    });
    
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  
  };
  