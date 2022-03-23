import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Modal from '../components/Modal/Modal';
import SideBar from '../components/SideBar';
import style from '../components/SideBar/SideBar.module.scss';
import { useTypedSelector } from '../components/hooks/useTypedSelector';
import Column from '../components/Column/Column';
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { add_to_redux_from_db } from '../store/actions/actions';
import Alert from '../components/Alert/Alert';
import { compare } from '../utils/ustils';

const Home: NextPage = () => {
  const { modalShow, tasks, infoModalShow, alertShow } = useTypedSelector(
    (state) => state.task
  );

  const new_tasks = tasks.filter((task) => task.position == 'new');
  const progress_tasks = tasks.filter((task) => task.position == 'progress');
  const done_tasks = tasks.filter((task) => task.position == 'done');

  const dispatch = useDispatch();
  useEffect(() => {
    let obj = Cookie.get('tasks');
    if (obj) {
      let jsonObj = JSON.parse(obj);

      jsonObj.forEach((el: any) => {
        let isInRedux = tasks.find((task) => task.id == el.id);
        dispatch(add_to_redux_from_db(el));
      });
    }
  }, []);

  const [equalArr, setEqualArr] = useState();

 
  useEffect(() => {

    let obj = Cookie.get('tasks');
    if (obj) {
      let jsonObj = JSON.parse(obj);

      let isEqual = setEqualArr(compare(tasks, jsonObj));
      console.log('equalArr: ', isEqual);
    }

  }, [])

  return (
    <Layout>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <title>T.M.</title>
      </Head>
      {alertShow && <Alert />}
      <main className="page container">
        <div className={style.sidebar}>
          <SideBar />
        </div>
        <div className="columns">
          <Column position="new" inner_tasks={new_tasks} />
          <Column position="progress" inner_tasks={progress_tasks} />
          <Column position="done" inner_tasks={done_tasks} />
        </div>
        {modalShow && <Modal />}
        {infoModalShow && <Modal />}
      </main>
    </Layout>
  );
};

export default Home;
