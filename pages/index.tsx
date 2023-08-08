
import { Client, Databases, Account } from 'appwrite';
import { useEffect } from 'react'
const endpoint_var= process.env.API_ENDPOINT
const project_var = process.env.API_PROJECT
  const client = new Client
  client.setEndpoint(`https://api.luckynerd.studio/v1`)
    .setProject(project_var)


export default function Home(tweets: any) {
  console.log(tweets)
  useEffect(() => {
    
  },[]  )


  const createUser = async () => {
    const client = new Client
    client
      .setEndpoint(`https://api.luckynerd.studio/v1`)
      .setProject(``)
    const account = new Account(client)
    
    const response = account.create(
      'username',
      'email@email.com',
      'password'
    );

    response.then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    })

  }
    const logonUser = async () => {
    const client = new Client
    client
      .setEndpoint(`https://api.luckynerd.studio/v1`)
      .setProject(``)
    const account = new Account(client)
    
    const response = account.createEmailSession(
      'email@email.com',
      'password'
    );

    response.then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    })

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
        <div className={`my-3`}>
          <label>Create User</label>
            <span className={`border-r-blue-950 py-3 rounded border-2 py-1 px-3 mx-2` }>
            <button onClick={createUser}>Submit</button>
            </span>
        </div>
        <div className={`my-6`}>
          <label>logon User</label>
            <span className={`border-r-blue-950 py-3 rounded border-2 py-1 px-3 mx-2` }>
            <button onClick={logonUser}>Submit</button>
        </span>
        </div>

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