<template>
  <div class="image-editor">
    <tui-image-editor
      ref="imageEditor"
      :include-ui="useDefaultUI"
      :options="options"
    ></tui-image-editor>
  </div>
</template>

<script >
import "tui-color-picker/dist/tui-color-picker.css";
import "tui-image-editor/dist/tui-image-editor.css";
import { ImageEditor } from "@toast-ui/vue-image-editor";

export default {
  name: "Editor2d",
  components: {
    "tui-image-editor": ImageEditor,
  },
  data() {
    return {
      useDefaultUI: true,
      options: {
        // for tui-image-editor component's "options" prop
        cssMaxWidth: 600,
        cssMaxHeight: 800,
        includeUI: {
          menuBarPosition: "right",
        },
      },
    };
  },
  mounted() {
    // this.$refs.imageEditor.invoke(
    //   "loadImageFromURL",
    //   "https://www.biltmoreperiodontics.com/wp-content/uploads/2021/06/teeth-in-skeleton-lowrez-1024x626.jpg",
    //   "My sample image"
    // );
    this.$refs.imageEditor
      .addImageObject(
        "https://www.biltmoreperiodontics.com/wp-content/uploads/2021/06/teeth-in-skeleton-lowrez-1024x626.jpg"
      )
      .then((objectProps) => {
        console.log("Image Loaded");
        console.log(objectProps.id);
      })
      .catch((error) => {
        console.log({ error });
      });
  },
};
</script>

<style scoped>
.image-editor {
  width: 100%;
  height: 100%;
  color: green;
}
</style>