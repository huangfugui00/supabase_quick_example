import React,{useState,useEffect} from 'react'
import { supabase } from '../../utils/supabaseClient'
import Account from '../../components/Account'


const index = () => {
    const [session, setSession] = useState(null)

    useEffect(() => {
      setSession(supabase.auth.session())
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
    return (
        <div>
            {session?<Account key={session.user.id} session={session} />:<></>}
        </div>
    )
}

export default index
