
import { Client, Databases, Account } from 'appwrite';

const endpoint_var= process.env.API_ENDPOINT
const project_var = process.env.API_PROJECT
  const client = new Client
  client.setEndpoint(`https://api.luckynerd.studio/v1`)
    .setProject(project_var)


export default function Home(tweets: any) {
  console.log(tweets)



  const createUser = async () => {
      const client = new Client
  client.setEndpoint(`https://api.luckynerd.studio/v1`)
    .setProject(project_var)
    const account = new Account(client)
    const response = await account.create(
      'username',
      'email',
      'password'
    )
    console.log(response)

  }
  
  return (
    <>
      <div className="container">
        <h2 className={`py-3`}>Hello!@ </h2>
      </div>

      <div>
        <div className="formSection">
          <form action="">
            <input type="text" placeholder="Username" className="px-3 mx-3 input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Password" className="input mx-3 input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Email" className="input mx-3 input-bordered input-primary w-full max-w-xs" />

          </form>
        </div>
                    <button onClick={createUser}>Submit</button>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const client = new Client
  client
    .setEndpoint(endpoint_var)
    .setProject(process.env.API_PROJECT)
  const databases = new Databases(client)
  const tweets = await databases.listDocuments(
    process.env.TWEETS_DB,
    process.env.TWEETS_COLLECTION
  ) 
  return {
    props: { tweets },
  }
}