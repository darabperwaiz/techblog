
import { ExclamationCircleFilled } from '@ant-design/icons';
import {Modal} from 'antd';
import axios from "axios";

const {confirm} = Modal

const showDeleteConfirm = (id) => {
  confirm({
    title: 'Are you sure delete this post?',
    icon: <ExclamationCircleFilled />,
    // content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
      axios({
        method: 'delete',
        url: `http://localhost:4000/api/v1/delete/${id}`,
        // data: status,
        validateStatus: (status) => {
          return true; 
        },
      }).catch(error => {
          console.log(error);
      }).then(response => {
          console.log(response);
      });
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

export default showDeleteConfirm