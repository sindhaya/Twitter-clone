import { Button, Popover } from 'antd';
import { useState } from 'react';

import style from "./Dialog2.module.css"

const Dialog2 = (props) => {
  const [open, setOpen] = useState(false);
  // const[IsNotIntrested,setIsNotIntrested]=useState(false)

  // function Hello(e) {
  //  alert("hllo")
  //  setIsNotIntrested(true)
  // }
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={<a onClick={props.onClick}> Is Not Intrested</a>}
      title="block"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button className={style.btn} type="primary">...</Button>
    </Popover>
  );
};
export default Dialog2;
