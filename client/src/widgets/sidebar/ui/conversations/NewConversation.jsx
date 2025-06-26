import styled from 'styled-components';
import { HiOutlinePlusCircle } from 'react-icons/hi2';

import { Modal } from '../../../../shared/ui/modal';
import {
  SearchPartners,
  PartnersList,
} from '../../../../features/searchPartners';
import { useStartConversation } from '../../../../features/startConversation/lib/hooks/useStartConversation';

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  padding: 1rem;

  svg {
    width: 4rem;
    height: 4rem;
    color: var(--color-grey-400);
    transition: all 0.1s linear;
    cursor: pointer;

    &:hover {
      color: var(--color-sky-500);
    }
  }
`;

export function NewConversation() {
  const { isSuccess, startConversationWith } = useStartConversation();

  return (
    <ListItem>
      <Modal>
        <Modal.Open opens="new-conversation">
          <HiOutlinePlusCircle />
        </Modal.Open>
        <Modal.Window name="new-conversation">
          <SearchPartners>
            <PartnersList
              isSuccess={isSuccess}
              startConversationWith={startConversationWith}
            />
          </SearchPartners>
        </Modal.Window>
      </Modal>
    </ListItem>
  );
}
