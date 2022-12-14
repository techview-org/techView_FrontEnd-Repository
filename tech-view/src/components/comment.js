import { Tab } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid';
import React, { Component ,useState, useEffect} from 'react';



const categories = ['Behavioral', 'LeetCode 75', 'Technical'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Comment() {

  const [comment,setComment] = useState("")
console.log(comment)


    useEffect(() => {
      let likes = 5;
      console.log(likes)
      let welcome_id = 1
      // fetch('http://localhost:4005/user').then(res => res.json())
      // .then(result => {
      //     console.log(result);
      // welcome_id = result;

  let body = {  welcome_id, likes, comment };
  console.log(body)
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }

  
fetch('http://localhost:4005/new_comment', options)

      }
, []);


  
  return (
    <form action="#">
      <Tab.Group>
        {({ selectedIndex }) => (
          <>
            <Tab.List className="flex items-center">
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                      : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                    'rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
                  )
                }
              >
                Write
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                      : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                    'ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
                  )
                }
              >
                Preview
              </Tab>

              <div>
        <form className="form" >
          <label>
            Category:
            <select className="category" ref={(input) => this.category = input}>
              {categories.map((category, index) =>
                <option key={category} value={category}>{category}</option>
              )}
            </select>
          </label>
          <label>
            Title:
            <input type="text" className="titles" placeholder="Title"ref={(input) => this.title = input} />
          </label>
          <label>
            Content:
            <input type="text" className="contents" placeholder="Question" ref={(input) => this.content = input} />
          </label>
          <center><div> <button className="button-default" > Ask A Question!</button></div></center>

        </form>
      </div>
            </Tab.List>
            <Tab.Panels className="mt-2">
             
              <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                <div className="border-b">
                  <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                    Preview content will render here.
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </>
        )}
      </Tab.Group>
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          onSubmit={(input) => {setComment(input.target.value); console.log(input); input.preventDefault()}}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-blue  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Comment
        </button>
      </div>
    </form>
  )
}