import React from 'react'
import {ClassCard} from '../index';
import { Class1, Class2, Class3, Class4, Class5, Class6, Class7, Class8, Class9 } from '../../assets';

const Home = () => {

  const enrolled = [
    {
      id: 1,
      icon: Class1,
      banner: "bg-gradient-to-r from-fuchsia-500 to-cyan-500",
      name: "Mathematics",
      section: "8 A",
      teacher: "Mr. John Doe",
      tasks: [
        {
          id: "1234", 
          title: "Assignment 1",
        },
        {
          id: "5678",
          title: "Assignment 2",
        },
        {
          id: "91011",
          title: "Assignment 3",
        },
      ],
    },
    {
      id: 2,
      icon: Class2,
      banner: "bg-gradient-to-r from-violet-500 to-purple-500",
      name: "Science",
      section: "8 B",
      teacher: "Mr. John Doe",
      tasks: [],
    },
    {
      id: 3,
      icon: Class3,
      banner: "bg-gradient-to-r from-teal-400 to-yellow-200",
      name: "English",
      section: "8 C",
      teacher: "Mr. John Doe",
      tasks: [],
    },
    {
      id: 4,
      icon: Class4,
      banner: "bg-gradient-to-r from-purple-500 to-purple-900",
      name: "Social Studies",
      section: "8 D",
      teacher: "Mr. John Doe",
      tasks: [],
    },
    {
      id: 5,
      icon: Class5,
      banner: "bg-gradient-to-r from-fuchsia-600 to-purple-600",
      name: "Mathematics",
      section: "8 A",
      teacher: "Mr. John Doe",
      tasks: [],
    },
    {
      id: 6,
      icon: Class6,
      banner: "bg-gradient-to-r from-purple-500 to-purple-900",
      name: "Science",
      section: "8 B",
      teacher: "Mr. John Doe",
      tasks: [],
    },
    {
      id: 7,
      icon: Class7,
      banner: "bg-gradient-to-r from-emerald-500 to-emerald-900",
      name: "English",
      section: "8 C",
      teacher: "Mr. John Doe",
      tasks: [],
    },
    {
      id: 8,
      icon: Class8,
      banner: "bg-gradient-to-r from-amber-500 to-pink-500",
      name: "Social Studies",
      section: "8 D",
      teacher: "Mr. John Doe",
      tasks: [],
    },
    {
      id: 9,
      icon: Class9,
      banner: "bg-gradient-to-r from-blue-800 to-indigo-900",
      name: "Social Studies",
      section: "8 D",
      teacher: "Mr. John Doe",
      tasks: [],
    },
    {
      id: 10,
      icon: Class1,
      banner: "bg-gradient-to-tr from-slate-900 via-violet-600 to-slate-700",
      name: "Social Studies",
      section: "8 D",
      teacher: "Mr. John Doe",
      tasks: [],
    },
  ];

  return (
    <div className='grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-4'>
      {
        enrolled.map((item) => (
          <ClassCard key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default Home