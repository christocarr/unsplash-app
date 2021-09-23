import { useEffect } from 'react';
import { getHomePhotos } from '../../store/homePageReducer/actions';
import { connect } from 'react-redux';
import InfiniteLoader from 'react-infinite-loader';
import saveImage from 'utils/saveImage';
import { Wrapper, PhotoList } from 'components';

function Home({ photos, getHomePhotos }) {
  useEffect(() => {
    getHomePhotos();
  }, []);

  return (
    <Wrapper>
      <PhotoList handleSave={saveImage} photos={photos} />
      <InfiniteLoader onVisited={() => getHomePhotos()} />
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  photos: state.homePhotos.photos,
});

const mapDispatchToProps = {
  getHomePhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
