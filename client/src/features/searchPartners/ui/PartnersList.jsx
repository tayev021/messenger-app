import styled from 'styled-components';
import { useEffect } from 'react';

import { Spinner } from '../../../shared/ui/Spinner';
import { URL } from '../../../shared/constants/constants';
import { usePartnersContext } from '../lib/hooks/usePartnersContext';
import { useModalContext } from '../../../shared/lib/hooks/useModalContext';
import { Avatar } from '../../../shared/ui/Avatar';

const List = styled.ul`
  height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  overflow-y: auto;
  scrollbar-color: var(--color-grey-400) transparent;
  scrollbar-width: thin;
`;

const TextItem = styled.li`
  font-size: 1.8rem;
  color: var(--color-grey-600);
`;

const Item = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 1rem;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    background-color: var(--color-grey-200);
  }
`;

const Fullname = styled.h5`
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: capitalize;
`;

export function PartnersList({ isSuccess, startConversationWith }) {
  const { search, isLoading, partners } = usePartnersContext();
  const { close: closeModal } = useModalContext();

  useEffect(
    function () {
      if (isSuccess) closeModal();
    },
    [isSuccess, closeModal]
  );

  if (!search) {
    return (
      <List>
        <TextItem>Type to start search</TextItem>
      </List>
    );
  }

  if (isLoading) {
    return (
      <List>
        <Spinner />
      </List>
    );
  }

  if (!partners?.length) {
    return (
      <List>
        <TextItem>Not Found</TextItem>
      </List>
    );
  }

  return (
    <List>
      {partners?.length &&
        partners.map((partner) => {
          const partnerAvatarSrc = partner.avatar
            ? `${URL}/avatars/${partner.avatar}`
            : '';
          const partnerInitials = partner.fullName
            .split(' ')
            .map((word) => word[0])
            .join('');

          return (
            <Item
              key={partner.id}
              onClick={() => startConversationWith(partner.id)}
            >
              <Avatar
                imageSrc={partnerAvatarSrc}
                initials={partnerInitials}
                type="inline"
                size="small"
              />
              <Fullname>{partner.fullName}</Fullname>
            </Item>
          );
        })}
    </List>
  );
}
