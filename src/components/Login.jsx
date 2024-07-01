import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {Login as authLogin} from "../store/authSlice"
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth/auth'
import { useForm } from 'react-hook-form'


function Login() {
  return (
    <div>Login</div>
  )
}

export default Login