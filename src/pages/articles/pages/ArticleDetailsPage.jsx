import BreadCrumbs from "../../../components/BreadCrumbs";

export default function ArticleDetailsPage({ id }) {
  return (
    <>
      <BreadCrumbs />
      <div>{id}</div>
    </>
  );
}
