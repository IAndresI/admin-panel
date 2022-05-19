import React from 'react'
import { useNavigate } from 'react-router-dom';
import HomeLayout from '../../components/HomeLayout/HomeLayout'
import { useAppSilector } from '../../store/hooks/redux';

export default function Home() {

  const isAuth = useAppSilector(state => state.user.isAuth);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate("/auth/login")
  }

  return (
    <HomeLayout>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi blanditiis voluptas, dolorum nihil in maiores recusandae sequi fugit excepturi debitis commodi omnis ducimus vero accusantium laudantium. Quia temporibus eligendi error?
      Iure, corrupti eaque sunt autem obcaecati ratione reiciendis recusandae et quod consequuntur excepturi ipsam porro voluptate dolores illum totam voluptatem non? Architecto, odit iusto. Eos rerum fugit autem. Fuga, enim!
    </HomeLayout>
  )
}