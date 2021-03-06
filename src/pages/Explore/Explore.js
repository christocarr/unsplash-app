import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getExplorePhotos } from '../../store/explorePageReducer/actions';
import { Wrapper, PhotoList, InfiniteLoader } from 'components';

function Explore({ photos, getExplorePhotos }) {
  useEffect(() => {
    getExplorePhotos();
  }, []);

  return (
    <Wrapper>
      <PhotoList photos={photos} />
      <InfiniteLoader getPhotos={() => getExplorePhotos()} />
    </Wrapper>
  );
}

const mapDispatchToProps = { getExplorePhotos };

const mapStateToProps = (state) => ({
  photos: state.explorePhotos.explorePhotos,
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
