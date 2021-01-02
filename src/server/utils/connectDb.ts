import mongoose from 'mongoose'

const connection = {
  isConnected: false
}

async function connectDb() {
  if (connection.isConnected) {
    return
  }

  const db: any = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  } as any)

  connection.isConnected = db.connections[0].readyState
}

export default connectDb
