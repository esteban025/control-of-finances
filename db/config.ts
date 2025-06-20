import { column, defineDb, defineTable } from 'astro:db';
// https://astro.build/db/config

const User = defineTable({
  columns: {
    id: column.text({primaryKey: true, optional:false, unique: true}),
    userName: column.text({optional: false, unique: true}),
    password: column.text({optional: true})
  }
})

const Session = defineTable({
  columns: {
    id: column.text({primaryKey: true, optional: false, unique: true}),
    userId: column.text({optional: false}),
    // createdAt: column.timestamp({defaultNow: true}),
    // updatedAt: column.timestamp({defaultNow: true})
  }
})
export default defineDb({
  tables: {
    users: User,
    sessions: Session
  }
});
