import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactsItem from './ContactsItem';
import {Link} from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

const Contacts=()=>{
    const [contacts, setContacts]=useState();
    const [isLoading, setLoading]=useState(false);
    const [searchValue, setSearchValue]=useState("");



    useEffect(() => {
        const fetchData = async () => {
            const email=localStorage.getItem('email');
          try {
            const response = await axios.get(`http://localhost:8085/apis/employees/contacts/contactsCreated/${email}`);
            console.log(response.data);
            setContacts(response.data);
            setLoading(true)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
      }, []);


      const contactsTable=()=>{
        const searchData=contacts.filter(each=>
            each.personName.toLowerCase().startsWith(searchValue.toLowerCase())
          )
        return (<div>
            <table className="min-w-full divide-y divide-gray-200 mt-10">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Mobile
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                       Company
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    searchData.map(each=>
                                        <ContactsItem key={each.contactId} each={each}/>
                                    )
                                }
                                </tbody>
                            </table>
        </div>)
      }



      return (<div>
        <div className='flex flex-row'>
        <Link to="/NewContacts">
        <button type="button" className="ml-5 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-700">Add Contact</button> </Link>
        <div className='relative flex items-center ml-10'>
      <input type='text' className='pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
      placeholder='Contact Name'
      value={searchValue}
      onChange={(event)=>setSearchValue(event.target.value)}/>
      <FaSearch className='absolute left-3 text-gray-400'/>
    </div>

        </div>
        {isLoading?contactsTable():null}
      </div>)

}

export default Contacts;