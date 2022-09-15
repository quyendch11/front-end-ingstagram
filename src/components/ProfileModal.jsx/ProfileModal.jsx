import { Modal, useMantineTheme } from "@mantine/core";
import {Formik,Form,Field} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../redux/services/profileService";

function ProfileModal({ modalOpened, setModalOpened }) {
    const dispatch=useDispatch()
    const {user}= useSelector(state=>{
        return state.user
    })
  const handleUpdate=(value)=>{
    updateUser('6322c91ccf3a3b1167109ba8',dispatch,value)
      setModalOpened(false)
  }
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
        <Formik initialValues ={user}
                onSubmit={handleUpdate}>
            <Form className={"infoForm"}>
                <h3>Your info</h3>

                <div>
                    <Field
                        type="text"
                        className="infoInput"
                        name="name"
                        placeholder="Name"
                    />

                    <Field
                        type="text"
                        className="infoInput"
                        name="dob"
                        placeholder="date of birth"
                    />
                </div>
                <div>
                    Profile Image
                    <Field type="file" name='profileImg'/>
                    Cover Image
                    <Field type="file" name="coverImg" />
                </div>

                <button className="button infoButton">Update</button>
            </Form>
        </Formik>
    </Modal>
  );
}

export default ProfileModal;
