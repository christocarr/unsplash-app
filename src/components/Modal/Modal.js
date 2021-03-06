import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSavePhoto } from '../../store/toggleSavePhotoReducer/action';
import getLastUpdated from '../../utils/getLastUpdated';
import useWindowDimensions from 'utils/useWindowDimensions';
import {
  ModalWrapper,
  ModalContent,
  TopNavBar,
  UserProfile,
  UserImage,
  UserInfo,
  Name,
  LastUpdated,
  ModalClose,
  Image,
  Footer,
  Likes,
  SaveImage,
  DownloadButton,
  IconImage,
  DownloadImage,
} from './Modal.Styles';

import CloseIcon from '../../assets/icons/close.svg';
import LikesIcon from '../../assets/icons/Heart.svg';
import SaveIconEmpty from '../../assets/icons/Star_empty.svg';
import SaveIconFull from '../../assets/icons/Star_full.svg';
import DownloadIcon from '../../assets/icons/download.svg';

function Modal({
  isOpen,
  content,
  setModalOpen,
  toggleSavePhoto,
  savedPhotos,
}) {
  const [lastUpdated, setLastUpdated] = useState('');
  const { windowWidth, windowHeight } = useWindowDimensions();

  useEffect(() => {
    if (isOpen) {
      setLastUpdated(getLastUpdated(content.created_at));

      //when modal is open disable scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;
  return createPortal(
    <ModalWrapper role="button" onClick={handleModalClose}>
      <ModalContent
        role="button"
        onClick={handleModalContentClick}
        width={content.width}
        height={content.height}
        windowWidth={windowWidth}
      >
        <TopNavBar>
          <UserProfile>
            <UserImage
              src={content.user.profile_image.medium}
              alt="user image"
            />

            <UserInfo>
              <Link to={`/users/${content.user.username}`}>
                <Name>{content.user.name}</Name>
              </Link>
              <LastUpdated>{lastUpdated}</LastUpdated>
            </UserInfo>
          </UserProfile>

          <ModalClose role="button" onClick={handleModalClose}>
            <IconImage src={CloseIcon} alt="close modal" />
          </ModalClose>
        </TopNavBar>
        <Image
          src={content.urls.regular}
          alt={content.alt_description}
          width={content.width}
          height={content.height}
        />
        <Footer>
          <Likes>
            <IconImage src={LikesIcon} alt="image likes total" />
            {content.likes}
          </Likes>
          <DownloadButton
            onClick={() => window.open(content.urls.regular, '_blank')}
          >
            <DownloadImage
              src={DownloadIcon}
              alt="download"
              aria-hidden="true"
              focusable="false"
            />
            Download
          </DownloadButton>
          <SaveImage onClick={() => toggleSavePhoto(content)}>
            {savedPhotos[content.id] ? (
              <IconImage src={SaveIconFull} alt="remove from saved photos" />
            ) : (
              <IconImage src={SaveIconEmpty} alt="save to saved photos" />
            )}
          </SaveImage>
        </Footer>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal')
  );
}

function getSavedPhotos(state) {
  return state.togglePhoto.savedPhotos;
}

const mapStateToProps = (state) => ({
  savedPhotos: getSavedPhotos(state),
});

const mapDispatchToProps = { toggleSavePhoto };

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
