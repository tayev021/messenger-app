import styled from 'styled-components';
import {
  HiMoon,
  HiOutlineArrowRightOnRectangle,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
} from 'react-icons/hi2';

import { Modal } from '../../../shared/ui/modal';
import { ChangeAvatar } from '../../../features/changeAvatar';
import { ChangePassword } from '../../../features/changePassword';
import { Signout } from '../../../features/signout';

const StyledList = styled.ul``;

const ListItem = styled.li`
  & div {
    display: flex;
    gap: 2rem;
    padding: 1rem 1rem 1rem 3rem;
    cursor: pointer;
  }

  &:hover {
    color: var(--color-grey-50);
    background-color: var(--color-sky-500);
  }

  svg {
    width: 2.6rem;
    height: 2.6rem;
    color: var(--color-sky-500);
  }

  &:hover svg {
    color: var(--color-grey-50);
  }
`;

export function List() {
  return (
    <StyledList>
      <ListItem>
        <Modal>
          <Modal.Open opens="change-avatar">
            <div>
              <HiOutlineUserCircle />
              <span>Change Avatar</span>
            </div>
          </Modal.Open>
          <Modal.Window name="change-avatar">
            <ChangeAvatar />
          </Modal.Window>
        </Modal>
      </ListItem>
      <ListItem>
        <Modal>
          <Modal.Open opens="change-password">
            <div>
              <HiOutlineLockClosed />
              <span>Change Password</span>
            </div>
          </Modal.Open>
          <Modal.Window name="change-password">
            <ChangePassword />
          </Modal.Window>
        </Modal>
      </ListItem>
      <ListItem>
        <div>
          <HiMoon />
          <span>Dark Theme</span>
        </div>
      </ListItem>
      <ListItem>
        <Signout>
          <HiOutlineArrowRightOnRectangle />
          <span>Sign Out</span>
        </Signout>
      </ListItem>
    </StyledList>
  );
}
