/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate()
  await knex('tasks').insert([
    {task_description: "play", task_notes: 'pay', task_completed: false, project_id:3},
    {task_description: "retrebution", task_notes: 'sword', task_completed: true, project_id:2 },
    {task_description: "denial", task_notes: 'egypt', task_completed: false, project_id:2 },
  ]);
};
